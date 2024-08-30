import { createCategory, getCategories } from "./API/categoryAPI";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import "./Home.css";
import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

export function Home() {
    const [categories, setCategories] = useState([]);
    const [success, setSuccess] = useState(false);
    
    const loadCategories = async () => {
        
        const response = await getCategories();
        setCategories(response.data);
    };
    
    useEffect(() => {
        loadCategories();
    }, [success]);

    useEffect(() => {
        if (success) {
            setTimeout(() => {
                setSuccess(false);
            }, 3000);
        }
    }, [success]);
    const handleCategoryChange = async (id) => {
        const response = await createCategory(id);
        setSuccess(true);

    }
    
    return (
        <div className="mainDivHome">
        <h1>Home</h1>
        {success && <Alert severity="success">Category created successfully</Alert>}
        <FormGroup>
            {categories.map((category)=><FormControlLabel control={<Checkbox disabled={category.status} onChange={()=>handleCategoryChange(category.id)} defaultChecked={category.status} />} label={category.name} />)}
        
        </FormGroup>
        
        </div>
    );
}
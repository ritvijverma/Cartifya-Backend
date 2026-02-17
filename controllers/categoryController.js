import slugify from "slugify";
import categoryModel from "../models/category.model.js";

export const createCategoryController = async(req, res) =>{

        try{
            const {name} = req.body
            if(!name){
                return res.status(401).send({message:'Name is Required'})
            }
            const existingCategory = await categoryModel.findOne({name})
            if(existingCategory){
                return res.status(200).send({
                    success:true,
                    message:'Category Already Exists'
                })
            }
        const category = await new categoryModel({name, slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:"New Category is Created ",
            category
        })

        }catch(error){
            console.log(error);
            res.status(500).send({
                success: false,
                error,
                message:"Error in Category"
            })
        }
}

//update Category

export const updateCategoryController = async(req,res) => {
    try{
        const {name} =req.body
        const {id} =req.params
        const category = await categoryModel.findByIdAndUpdate(id,{name, slug:slugify(name)},{new: true})
         res.status(200).send({
            success:true,
            message:"Category Updated Successfully",
            category,
         })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while updating Category"
        })
    }
}

// get all category

 export const categoryController = async(req,res) =>{
    try{
        const category = await categoryModel.find({})
        res.status(200).send({
            success:true,
            message:'All Categories List',
            category,

        })


    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error while getting Categogry"
        })
    }
 }

 //single-category controller

 export const singleCategoryController =async(req,res) =>{
    try{
        const category = await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:"Get Single Category  Successfull",
            category,
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
           success:false,
           error,
           message:"Error While Getting Single Category",
        })
    }
 }

 //delete category

 export const deleteCategoryController = async(req,res) => {
    try{
        const category = await categoryModel.findOneAndDelete({slug:req.params.slug})
        if(!category){
            return res.status(404).send({
                success:false,
                message:"Category Not Found",
            })
        }
        res.status(200).send({
            success:true,
            message:"Category is Deleted Successfully",
            category
        })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            error,
            message:"Error While Deleted Category ",
        })

    }
 }
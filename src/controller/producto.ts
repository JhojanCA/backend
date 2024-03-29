import { Request, Response } from "express";
import Producto from "../models/producto";

export const getProducts = async(req: Request, res: Response) => {    
    try {
        const listProducts = await Producto.findAll();
        res.json(listProducts);
    } catch (error) {
        console.log(error);
    }
}

export const getProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await Producto.findByPk(id);

    if (!product) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    } else {
        await product.destroy();
        res.json({
            msg: `El producto fue eliminado con exito`
        })
    }
}

export const postProduct = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        await Producto.create(body);
        res.json({
            msg: `El producto fue agregado correctamente`
        })
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un error`
        })
    }    
}

export const putProduct = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const product = await Producto.findByPk(id);

        if (product) {
            await product.update(body);
            res.json({
                msg: `El producto fue actualizado correctamente`
            })
        } else {
            res.status(404).json({
                msg: `No existe un producto con el id ${id}` 
            })
        }
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Ocurrió un error`
        })
    }
}
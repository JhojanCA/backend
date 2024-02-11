import { Router } from "express";
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from "../controller/producto";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
router.post('/', postProduct);
router.put('/:id', putProduct);

export default router;
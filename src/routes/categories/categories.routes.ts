import { Router } from 'express';
import { CategoriesRepository } from '../../repositories/categories/CategoriesRepository';
import { CreateCategoryService } from '../../services/categories/CreateCategoryService';

const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository()

categoriesRouter.post('/', (request, response) => {
    const { name, description } = request.body;
    
    const createCategoryService = new CreateCategoryService(categoriesRepository)
    createCategoryService.execute({ name, description })

    return response.status(201).send()
})

categoriesRouter.get('/', (request, response) => {
    const all = categoriesRepository.index();
    return response.json({categories :all})
})


export { categoriesRouter }
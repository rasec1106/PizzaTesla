package pe.cibertec.edu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.cibertec.edu.model.Category;
import pe.cibertec.edu.repository.CategoryRepository;
import pe.cibertec.edu.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public List<Category> getCategories() {
		return categoryRepository.findAll();
	}

	@Override
	public Category getCategoryById(int id) {
		return categoryRepository.findById(id).orElse(null);
	}

	@Override
	public Category createCategory(Category category) {
		return categoryRepository.save(category);
	}

	@Override
	public Category updateCategory(Category category) {
		if (categoryRepository.existsById(category.getCategoryId())) {
            return categoryRepository.save(category);
        }
        return null; // Handle the case where the product does not exist
	}

	@Override
	public boolean deleteCategory(int id) {
		if (categoryRepository.existsById(id)) {
			categoryRepository.deleteById(id);
            return true;
        }
        return false; // Handle the case where the product does not exist
	}

}

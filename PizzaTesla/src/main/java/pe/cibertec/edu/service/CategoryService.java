package pe.cibertec.edu.service;

import java.util.List;

import pe.cibertec.edu.model.Category;

public interface CategoryService {
	List<Category> getCategories();
	Category getCategoryById(Long id);
	Category createCategory(Category category);
	Category updateCategory(Category category);
    boolean deleteCategory(Long id);
}

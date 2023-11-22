package pe.cibertec.edu.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import pe.cibertec.edu.model.Category;
import pe.cibertec.edu.service.CategoryService;

@RestController
@RequestMapping("/api/category")
public class CategoryController {

	@Autowired
    private CategoryService categoryService;

	@GetMapping("/getCategories")
    public ResponseEntity<List<Category>> getCategorys() {
        List<Category> categories = categoryService.getCategories();
        return ResponseEntity.status(HttpStatus.OK).body(categories);
    }

    @GetMapping("/getCategoryById/{id}")
    public ResponseEntity<Category> getCategoryById(@PathVariable int id) {
        Category category = categoryService.getCategoryById(id);
        return ResponseEntity.status(HttpStatus.OK).body(category);
    }

    @PostMapping("/createCategory")
    public ResponseEntity<Category> createCategory(@RequestBody Category category) {
        Category createdCategory = categoryService.createCategory(category);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdCategory);
    }

    @PutMapping("/updateCategory")
    public ResponseEntity<Category> updateCategory(@RequestBody Category category) {
        Category updatedCategory = categoryService.updateCategory(category);
        if (updatedCategory != null) {
            return ResponseEntity.status(HttpStatus.OK).body(updatedCategory);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/deleteCategory/{id}")
    public ResponseEntity<Boolean> deleteCategory(@PathVariable int id) {
        boolean result = categoryService.deleteCategory(id);
        if (result) {
            return ResponseEntity.status(HttpStatus.OK).body(true);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
        }
    }
}

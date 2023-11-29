package pe.cibertec.edu.service;

import pe.cibertec.edu.model.Product;

import java.util.List;

public interface ProductService {
    List<Product> getProducts();
    Product getProductById(Long id);
    Product createProduct(Product product);
    Product updateProduct(Product product);
    boolean deleteProduct(Long id);
    List<Product> getProductsByCategory(Long categoryId);
}

package pe.cibertec.edu.service;

import pe.cibertec.edu.model.Product;

import java.util.List;

public interface ProductService {
    List<Product> getProducts();
    Product getProductById(int id);
    Product createProduct(Product product);
    Product updateProduct(Product product);
    boolean deleteProduct(int id);
    List<Product> getProductsByCategory(int categoryId);
}

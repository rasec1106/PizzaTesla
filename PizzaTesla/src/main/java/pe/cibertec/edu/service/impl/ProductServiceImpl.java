package pe.cibertec.edu.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pe.cibertec.edu.model.Product;
import pe.cibertec.edu.repository.ProductRepository;
import pe.cibertec.edu.service.ProductService;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
    private final ProductRepository productRepository;
    
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product getProductById(int id) {
        return productRepository.findById(id).orElse(null);
    }

    @Override
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    @Override
    public Product updateProduct(Product product) {
        if (productRepository.existsById(product.getId())) {
            return productRepository.save(product);
        }
        return null; // Handle the case where the product does not exist
    }

    @Override
    public boolean deleteProduct(int id) {
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
            return true;
        }
        return false; // Handle the case where the product does not exist
    }

    @Override
    public List<Product> getProductsByCategory(int categoryId) {
        // Implement your custom logic here
        // Example: return productRepository.findByCategoryId(categoryId);
        return null;
    }
}

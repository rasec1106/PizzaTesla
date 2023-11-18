package pe.cibertec.edu.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import pe.cibertec.edu.model.Product;
import pe.cibertec.edu.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/GetProducts")
    public ResponseEntity<List<Product>> getProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.status(HttpStatus.OK).body(products);
    }

    @GetMapping("/GetProductById/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable int id) {
        Product product = productService.getProductById(id);
        return ResponseEntity.status(HttpStatus.OK).body(product);
    }

    @PostMapping("/CreateProduct")
    public ResponseEntity<Product> createProduct(@RequestBody Product product) {
        Product createdProduct = productService.createProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }

    @PutMapping("/UpdateProduct")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product) {
        Product updatedProduct = productService.updateProduct(product);
        if (updatedProduct != null) {
            return ResponseEntity.status(HttpStatus.OK).body(updatedProduct);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @DeleteMapping("/DeleteProduct/{id}")
    public ResponseEntity<Boolean> deleteProduct(@PathVariable int id) {
        boolean result = productService.deleteProduct(id);
        if (result) {
            return ResponseEntity.status(HttpStatus.OK).body(true);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(false);
        }
    }

    @GetMapping("/getByCategory/{categoryId}")
    public ResponseEntity<List<Product>> getProductByCategory(@PathVariable int categoryId) {
        List<Product> products = productService.getProductsByCategory(categoryId);
        // Handle the case when the list is null or empty
        return ResponseEntity.status(HttpStatus.OK).body(products);
    }
}

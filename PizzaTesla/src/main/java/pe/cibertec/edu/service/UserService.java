package pe.cibertec.edu.service;

import java.util.List;

import pe.cibertec.edu.model.User;

public interface UserService {
	List<User> getUsers();
	User getUserById(Long id);
	User createUser(User user);
	User updateUser(User user);
    boolean deleteUser(Long id);
}

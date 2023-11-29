package pe.cibertec.edu.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import pe.cibertec.edu.model.User;
import pe.cibertec.edu.repository.UserRepository;
import pe.cibertec.edu.service.UserService;

@Service
public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public List<User> getUsers() {
		return userRepository.findAll();
	}

	@Override
	public User getUserById(Long id) {
		return userRepository.findById(id).orElse(null);
	}

	@Override
	public User createUser(User user) {
		return userRepository.save(user);
	}

	@Override
	public User updateUser(User user) {
		if (userRepository.existsById(user.getUserId())) {
            return userRepository.save(user);
        }
        return null; // Handle the case where the product does not exist
	}

	@Override
	public boolean deleteUser(Long id) {
		if (userRepository.existsById(id)) {
			userRepository.deleteById(id);
            return true;
        }
        return false; // Handle the case where the product does not exist
	}

}

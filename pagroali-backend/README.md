# PAgroAli

## Build with : 
Back-end
* Laravel framework
* Mysql

## Back-end
The different routes on the back-end side
  ### Public routes
   * Login(Post) : http://localhost:8000/api/v0/login/
   * Register(Post) : http://localhost:8000/api/v0/register/
   * GetAll(get) : http://localhost:8000/api/v0/products/
   * Search a product(get): http://localhost:8000/api/v0/products/search/{product_name}

  ### Private routes
   * Create(Post) : http://localhost:8000/api/v0/products/
   * Update(Put) : http://localhost:8000/api/v0/products/{id}
   * Delete(Post) : http://localhost:8000/api/v0/products/{id}
   * GetAll(Get) : http://localhost:8000/api/v0/products/
   * Logout(Post) : http://localhost:8000/api/v0/logout/
   * Get one product(Get) : http://localhost:8000/api/v0/products/{id}
   * Search a product(Get) : http://localhost:8000/api/v0/products/search/{product_name}
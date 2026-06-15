String password = user.getPassword();

if (password == null || password.isEmpty()) {
    System.out.println("Password cannot be empty");
}
else if (password.length() < 8) {
    System.out.println("Password must be at least 8 characters");
}
else if (!password.equals("Admin@123")) {
    System.out.println("Incorrect password");
}
else {
    System.out.println("Login successful");
}

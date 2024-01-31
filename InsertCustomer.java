package Customer;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import java.sql.SQLException;



public class InsertCustomer{
    private String jdbcURL = "jdbc:mysql://localhost:3306/demo?useSSL=false";
    private String jdbcUsername = "root";
    private String jdbcPassword = "komal";
    private static final String insertQuery = "INSERT INTO Customer" + "  (uuid, first_name, last_name, street, address, city, state, email, phone ) VALUES " +
    " (?, ?, ?, ?, ?, ?, ?, ?, ?);";

    protected Connection getConnection() {
        Connection connection = null;
        try {
            Class.forName("com.mysql.jdbc.Driver");
            connection = DriverManager.getConnection(jdbcURL, jdbcUsername, jdbcPassword);
        } catch (SQLException e) {
           
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
          
            e.printStackTrace();
        }
        return connection;
    }


    public void insertUser(Customer c) throws SQLException {
        System.out.println(insertQuery);
        // try-with-resource statement will auto close the connection.
        try (Connection connection = getConnection(); PreparedStatement preparedStatement = connection.prepareStatement(insertQuery)) {
            preparedStatement.setString(1, c.getuuid());
            preparedStatement.setString(2, c.getfirstName());
            preparedStatement.setString(3, c.getlastName());
            preparedStatement.setString(4, c.getStreet());
            preparedStatement.setString(5, c.getAddress());
            preparedStatement.setString(6, c.getCity());
            preparedStatement.setString(7, c.getState());
            preparedStatement.setString(8, c.getEmail());
            preparedStatement.setString(9, c.getPhone());
            System.out.println(preparedStatement);
            preparedStatement.executeUpdate();
        } catch (SQLException e) {
           // printSQLException(e);
        }
    }

}
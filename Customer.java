export package Customer;

public class Customer {
    protected String uuid;
    protected String first_name;
    protected String last_name;
    protected String street;

    protected String address;
    protected String city;
    protected String state;
    protected String email;
    protected String phone;

    public Customer(String uuid, String first_name, String last_name, String street, String address, String city, String state, String email, String phone){

        this.uuid=uuid;
        this.first_name=first_name;
        this.last_name=last_name;
        this.street=street;
        this.address=address;
        this.city=city;
        this.state=state;
        this.email=email;
        this.phone=phone;

    }

    public String getuuid() {
        return uuid;
    }

    public String getfirstName(){
        return first_name;
    }

    public String getlastName(){
        return last_name;
    }

    public String getStreet(){
        return street;
    }

    public String getAddress(){
        return address;
    }

    public String getCity(){
        return city;
    }

    public String getState(){
        return state;
    }

    public String getEmail(){
        return email;
    }

    public String getPhone(){
        return phone;
    }


}

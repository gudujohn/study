package structural.aaadapter;

public class CarFactoryImplAudi implements CarFactory {

	@Override
	public Car createCar() {
		Car c = new Car();
		c.setColor("123");
		c.setName("321");
		return c;
	}

}

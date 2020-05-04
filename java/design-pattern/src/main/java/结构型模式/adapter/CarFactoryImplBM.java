package 结构型模式.adapter;

public class CarFactoryImplBM implements CarFactory {

	@Override
	public Car createCar() {
		Car c = new Car();
		c.setColor("456");
		c.setName("654");
		return c;
	}

}

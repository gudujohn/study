package structural.aaadapter;

public class CarAdapterImp implements CarAdapter {
	CarFactoryImplAudi audi;
	CarFactoryImplBM bm;

	public Car createCar(String carType) {
		Car car = null;
		if (carType.equals("audi")) {
			audi = new CarFactoryImplAudi();
			car = audi.createCar();
		}
		if (carType.equals("bm")) {
			bm = new CarFactoryImplBM();
			car = bm.createCar();
		}
		return car;
	}

	@Override
	public Car changeColor(Car c, String color) {
		c.setColor(color);
		return c;
	}
}

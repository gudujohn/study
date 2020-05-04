package 结构型模式.adapter;

public class test {
	public static void main(String[] args) {
//		CarFactoryImpl carFactoryImpl = new CarFactoryImpl();
		CarAdapterImp carAdapterImp = new CarAdapterImp();
		Car c = carAdapterImp.createCar("audi");
		System.out.println(c.getColor() + c.getName());

		Car c1 = carAdapterImp.changeColor(c, "789");
		System.out.println(c1.getColor() + c1.getName());
	}
}

package 结构型模式.bridge;

public class CarImpl extends Car{

	@Override
	public void makeCare(String cartype) {
		color.addColor(cartype);
	}
}

package structural.abbridge;

public class CarImpl extends Car{

	@Override
	public void makeCare(String cartype) {
		color.addColor(cartype);
	}
}

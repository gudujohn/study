package 结构型模式.bridge;

public abstract class Car {
	Color color;
	public void setColor(Color color) {
		this.color = color;
	}
	public abstract void makeCare(String cartype);
}

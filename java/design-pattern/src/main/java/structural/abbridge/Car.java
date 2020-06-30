package structural.abbridge;

public abstract class Car {
	Color color;
	public void setColor(Color color) {
		this.color = color;
	}
	public abstract void makeCare(String cartype);
}

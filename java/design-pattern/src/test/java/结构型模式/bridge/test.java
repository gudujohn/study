package 结构型模式.bridge;

public class test {
	public static void main(String[] args) {
		CarImpl carImpl = new CarImpl();
		White w = new White();
		carImpl.setColor(w);
		carImpl.makeCare("奥迪");
	}
}

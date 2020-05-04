package 结构型模式.bridge;

public class Black implements Color {

	@Override
	public void addColor(String carType) {
		System.out.println(carType + "黑色");
	}

}

package 结构型模式.bridge;

public class White implements Color {

	@Override
	public void addColor(String carType) {
		System.out.println(carType + "白色");
	}

}

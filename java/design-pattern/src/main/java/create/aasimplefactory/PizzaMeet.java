package create.aasimplefactory;

public class PizzaMeet extends Pizza{

	@Override
	public void prepare() {
		System.out.println("准备meet");

	}

	@Override
	public void make() {
		System.out.println("开始制作肉类披萨");

	}

	@Override
	public void complete() {
		System.out.println("肉类披萨制作成功");

	}

}

package create.aasimplefactory;

public class PizzaVegg extends Pizza{

	@Override
	public void prepare() {
		System.out.println("准备蔬菜");

	}

	@Override
	public void make() {
		System.out.println("开始制作蔬菜披萨");

	}

	@Override
	public void complete() {
		System.out.println("蔬菜披萨制作成功");

	}

}

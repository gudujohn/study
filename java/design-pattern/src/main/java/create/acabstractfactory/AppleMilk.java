package create.acabstractfactory;

public class AppleMilk extends Milk{

	@Override
	public void prepare() {
		System.out.println("准备牛奶");

	}

	@Override
	public void make() {
		System.out.println("开始牛奶制作");

	}

	@Override
	public void complete() {
		System.out.println("牛奶制作成功");

	}
}

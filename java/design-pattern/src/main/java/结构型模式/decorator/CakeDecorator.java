package 结构型模式.decorator;

//װ���߳����࣬������һ������Ҫ�����飬���ǵ�һ��ʹ�������ǵĹ��췽����
public class CakeDecorator implements Cake {
	Cake cake;

	public CakeDecorator(Cake cake) { // ������캯������Ϊ���ܹ�������һ���Ķ�������һ������װ��
		this.cake = cake;
	}

	@Override
	public String nameDetail() {
		return cake.nameDetail();
	}

	@Override
	public Double price() {
		return cake.price();
	}

}

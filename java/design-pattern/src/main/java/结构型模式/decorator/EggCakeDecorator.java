package 结构型模式.decorator;

//�����װ�����࣬��һ�㣬�̳��˸���Ĺ��췽�����ڶ��㣬ʵ���˾����װ�����ݡ�
public class EggCakeDecorator extends CakeDecorator {

	public EggCakeDecorator(Cake cake) {
		super(cake);
	}

	// ʵ�־����װ������
	@Override
	public String nameDetail() {
		return "����" + super.nameDetail();
	}

	@Override
	public Double price() {
		return super.price() + 1.5;
	}
}

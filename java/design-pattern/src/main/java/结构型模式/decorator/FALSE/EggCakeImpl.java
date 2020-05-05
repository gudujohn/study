package 结构型模式.decorator.FALSE;

import design.Decorator.Cake;

public class EggCakeImpl implements Cake{

	@Override
	public String nameDetail() {
		// TODO Auto-generated method stub
		return "������ץ��";
	}

	@Override
	public Double price() {
		// TODO Auto-generated method stub
		return 6.5;
	}

}

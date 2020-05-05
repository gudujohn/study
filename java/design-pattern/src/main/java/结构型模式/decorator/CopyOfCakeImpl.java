package 结构型模式.decorator;

//�����Ķ����ࡣһ��ԭ�ͣ�û�������Ķ��󣩡����ԭ�ͣ�����Ҫ�����ξ�����һ��һ���Ľ�����Ϊ����ġ�
public class CopyOfCakeImpl implements Cake {

	@Override
	public String nameDetail() {
		return "ԭζ��ץ��";
	}

	@Override
	public Double price() {
		// TODO Auto-generated method stub
		return 5.0;
	}
}

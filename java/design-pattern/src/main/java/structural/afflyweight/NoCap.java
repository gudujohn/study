package structural.afflyweight;

//非共享部分的子类，他关注于我们的非共享部分。二维码部分 getcode。
public class NoCap implements BottleCap{

	@Override
	public String getColor() { //不需要考虑这个颜色，因为我是不可共享部分的代表
		return null;
	}

	//different 这个参数，是为了客户端调用的时候传入。也是为了对我们的二维码进行特异性的编辑。
	@Override
	public String getCode(String different) {
		return different + "制作完成";
	}

}

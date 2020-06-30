package structural.afflyweight;

//具体享元类，他关注我们的类整体。对于共享部分自己处理（颜色部分）。对于非共享部分，他引入了我们的非共享部分负责类进行处理。
//引入方式，是引入了我们的父类，更加具有包容性。
public class OkCap implements BottleCap{
	BottleCap bottleCap;
	String color;
	
	public OkCap(String color,BottleCap bottleCap) {
		this.color = color;
		this.bottleCap = bottleCap;
	}
	
	@Override
	public String getColor() {
		return this.color;
	}

	//虽然我们okcap作为可共享的子类，但是我们要知道，享元模式最终想要的对象是一个 内部状态 ＋ 外部状态的一个完整的对象
	//考虑外部状态不是okcap的事儿，但是不考虑不行，因为我们最终想要一个完整的对象。完整对象 = 外部状态 + 内部状态
	//？？okcap考虑了半天，发现，有专门的管理 外部状态的nocap，这个时候，okcap想到了，我只要将nocap关联进来，就可以
	//调用nocap的getcode方法了。
	@Override
	public String getCode(String different) {
		// TODO Auto-generated method stub
		if (bottleCap == null) {
			return "活动结束，不需要考虑二维码";
		}
		return bottleCap.getCode(different);
	}

}

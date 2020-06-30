package create.aasimplefactory;

/**
 * 抽象产品类，作为父类出现，供各种pizza种类继承
 */
public abstract class Pizza {
	
	public abstract void prepare();
	
	public abstract void make();

	public abstract void complete();
}

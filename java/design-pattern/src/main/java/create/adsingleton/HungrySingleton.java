package create.adsingleton;

public class HungrySingleton {

    private static final HungrySingleton instance = new HungrySingleton();

    private HungrySingleton() {}

    public HungrySingleton getInstance() {
        return instance;
    }

}
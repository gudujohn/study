import java.util.Scanner;

/**
 * 计算最少出列多少位同学，使得剩下的同学排成合唱队形 说明： N位同学站成一排，音乐老师要请其中的(N-K)位同学出列，使得剩下的K位同学排成合唱队形。 合唱队形是指这样的一种队形：设K位同学从左到右依次编号为1，2…，K，他们的身高分别为T1，T2，…，TK， 则他们的身高满足存在i（1<=i<=K）使得T1<T2<......<Ti-1<Ti>Ti+1>......>TK。
 *
 * 你的任务是，已知所有N位同学的身高，计算最少需要几位同学出列，可以使得剩下的同学排成合唱队形。
 */
public class MainInportant24 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		while (scanner.hasNext()) {
			int n = scanner.nextInt();
			int[] heigths = new int[n];
			for (int i = 0; i < n; i++) {
				heigths[i] = scanner.nextInt();
			}
			System.out.println(removeNo(heigths));
		}
	}

	private static int removeNo(int[] heigths) {
		int length = heigths.length;
		int[] positive = heigths;
		int[] reverse = new int[length];
		for (int i = 0; i < length; i++) {
			reverse[i] = positive[length - i - 1];
		}
		int[] dp = maxSub(positive);
		int[] dpReverse = maxSub(reverse);
		int[] sum = new int[length];
		for (int i = 0; i < length; i++) {
			sum[i] = dp[i] + dpReverse[length - i - 1];
		}
		int max = 0;
		for (int i = 0; i < length; i++) {
			max = sum[i] > max ? sum[i] : max;
		}
		return length - (max - 1);
	}

	private static int[] maxSub(int[] height) {
		int[] dp = new int[height.length];
		for (int i = 0; i < height.length; i++) {
			dp[i] = 1;
			for (int j = 0; j < i; j++) {
				if (height[j] < height[i]) {
					dp[i] = Math.max(dp[i], dp[j] + 1);
				}
			}
		}
		return dp;
	}
}
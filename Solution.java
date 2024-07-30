import java.util.*;

class Solution {
    public static ArrayList<ArrayList<?>> fourSum(int[] nums, int target) {
        HashSet<List<Integer>> set = new HashSet<>();

        Arrays.sort(nums);
        int n = nums.length;
        for(int i=0;i<n;i++){
            for(int j = i+1;j<n;j++){
                int k = j+1,l=n-1;
                while(k<l){
                    long sum = (long)(nums[i] +nums[j]+nums[k] +nums[l]);
                    if(sum == target){
                        set.add(Arrays.asList(nums[i],nums[j],nums[k],nums[l]));
                        k++;
                        l--;
                        System.out.println(sum);
                    }
                    else if(sum > target){
                        l--;
                    }
                    else{
                        k++;
                    }
                }
            }
        }
        return new ArrayList(set);
    }



    public static void main(String[] args) {
        int arr[] = {1000000000,1000000000,1000000000,1000000000};
        int target = -294967296;
       System.out.println(fourSum(arr,target));
    }
}




//     int n = intervals.length;
//         int m = intervals[0].length;
        
//         Arrays.sort(intervals, (a, b) -> Integer.compare(a[0],b[0]));
//         List<List<Integer> list = new ArrayList<>();
//         for(int i= 0;i<n;i++){
//             int s=intervals[i][0],e=intervals[i][1];
//             if(!list.isEmpty() && e < list.get(list.size()-1).get(1)){
//                 continue;
//             }
//             for(int j = i+1;j<m;j++){
//                 if(e > arr[j][0] && e < arr[j][1]){
//                     e = arr[j][1];
//                 }
//                 else{
//                     break;
//                 }
//                 list.add(Arrays.asList(s,e));
//             }
//         }
//             return list;
//     }
// }
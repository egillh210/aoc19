const input = `51360
95527
72603
128601
68444
138867
67294
134343
62785
53088
134635
137884
97654
103704
138879
87561
83922
68414
84876
105143
76599
98924
57080
63590
50126
111872
55754
64410
78488
56557
105446
127182
59451
87249
61652
131698
148820
95742
68223
121744
65678
99745
64089
75610
106085
100364
116959
122862
56580
109631
82895
79666
133474
50579
83473
140028
125999
68225
131345
90797
84914
81915
65369
71230
50379
106385
118503
119640
138540
70678
95881
100282
123060
147368
93030
82553
131271
147675
111126
115183
82956
145698
99261
52768
99207
123551
64738
117275
98136
111592
78576
118613
130351
68567
72356
85608
129414
66521
76924
130449`

const testinput = '1969';

let total = 0;

const part2 = inputarray => {
    for(const item of inputarray) total +=item;

    let newarr = []

    for(const item of inputarray) {
        const fuel = Math.floor(item/3)-2;
        if(fuel > 0) newarr.push(fuel);
    }

    if(newarr.length === 0) console.log(total);
    else part2(newarr);

}


const part1 = input => {

    input = input.split('\n').map(Number)
    let newarray = []

    for(const item of input) {

        const fuel = Math.floor(item/3)-2
        //total += fuel;
        newarray.push(fuel);

    }

    part2(newarray)

}

part1(input)


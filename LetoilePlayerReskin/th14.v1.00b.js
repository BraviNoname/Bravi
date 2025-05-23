{
    "codecaves": {
        "ANM_INT_VAR_COPY_DIRECT": {   
            "code": "\
03 FB 46 00 0D FB 46 00 17 FB 46 00 \
21 FB 46 00 2B FB 46 00 37 FB 46 00 \
43 FB 46 00 4F FB 46 00 7F FB 46 00 \
89 FB 46 00 B5 FB 46 00 93 FB 46 00 \
9F FB 46 00 AB FB 46 00 5B FB 46 00 \
67 FB 46 00 73 FB 46 00 D8 FB 46 00 <codecave:POWER> \
            ",
        },
        "ANM_INT_VAR_COPY_INDIRECT": {   
            "code": "\
00 01 02 03 04 05 06 07 08 09 \
11 11 11 11 11 11 11 11 11 11 \
11 11 0A 11 11 11 11 0B 0C 0D \
11 11 11 0E 0F 10 12 \
            ",
        },
    "POWER": { // 12
        "code": "\
8B 05 <Rxf5858> \
5D \
C2 0400 \
        ",
    },
},
    "binhacks": { 
        "anm_int_var_jmp_check_change": {
            "addr": "0x46faec", 
            "code": "83 F8 24"
        },
        "anm_int_var_table_replace": {
            "addr": "0x46faf5", 
            "code": "0FB6 80 <codecave:ANM_INT_VAR_COPY_INDIRECT> FF 24 85 <codecave:ANM_INT_VAR_COPY_DIRECT>"
        },
    },
}
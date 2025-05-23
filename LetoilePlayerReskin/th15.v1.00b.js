{
    "codecaves": {
        "anm_int_var_table_copy_direct": {
            "code": "\
c3 7a 47 00 cd 7a 47 00 d7 7a 47 00 e1 7a 47 00 \
eb 7a 47 00 f7 7a 47 00 03 7b 47 00 0f 7b 47 00 \
3f 7b 47 00 49 7b 47 00 75 7b 47 00 53 7b 47 00 \
5f 7b 47 00 6b 7b 47 00 1b 7b 47 00 27 7b 47 00 \
33 7b 47 00 98 7b 47 00 \
<codecave:POWER> \
            "
        },
        "anm_int_var_table_copy_indirect": {
            "code": "\
00 01 02 03 04 05 06 07 08 09 11 11 11 11 11 11 11\
11 11 11 11 11 0a 11 11 11 11 0b 0c 0d 11 11 11\
0e 0f 10 12 \
            "
        },
        "POWER": {
            "code": "\
8B 05 <0x4E7440> \
5D \
C2 0400 \
            "
        },
    },
    "binhacks": {
        "anm_i_global_jmp_bounds": { 
            "addr": "0x477aac", 
            "code": "83 f8 24" 
        },
        "anm_int_var_jmp_table": {
            "addr": "0x477ab5",
            "code": "0FB6 80 <codecave:anm_int_var_table_copy_indirect> FF 24 85 <codecave:anm_int_var_table_copy_direct>"
        },
    }
}
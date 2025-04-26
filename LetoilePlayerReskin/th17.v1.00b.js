{
	"codecaves": {
		"ANM_INT_VAR_COPY_DIRECT":  {   
            "code": "\
93 6a 46 00 9d 6a 46 00 a7 6a 46 00 b1 6a 46 00 \
bb 6a 46 00 c7 6a 46 00 d3 6a 46 00 df 6a 46 00 \
0f 6b 46 00 19 6b 46 00 45 6b 46 00 23 6b 46 00 \
2f 6b 46 00 3b 6b 46 00 eb 6a 46 00 f7 6a 46 00 \
03 6b 46 00 68 6b 46 00 <codecave:POWER_VARIABLE> \
            ",
		},
		"ANM_INT_VAR_COPY_INDIRECT": {   
            "access": "re",
            "code": "\
00 01 02 03 04 05 06 07 08 09 11 11 \
11 11 11 11 11 11 11 11 11 11 0A 11 \
11 11 11 0B 0C 0D 11 11 11 0E 0F 10 12 11 \
            ",
        },
        "POWER_VARIABLE": { // 12
            "access": "re",
            "code": "\
8B 05 <0x4B5A30> \
5D \
C2 0400 \
        ",
    },
	},
	"binhacks": {
        "anm_int_var_jmp_check_change": {
            "addr": "0x466a7c", 
            "code": "83 F8 24"
        },
        "anm_int_var_table_replace": {
            "addr": "0x466a85", 
            "code": "0FB6 80 <codecave:ANM_INT_VAR_COPY_INDIRECT> FF 24 85 <codecave:ANM_INT_VAR_COPY_DIRECT>"
        },
	}
}

def solution(my_string, overwrite_string, s):
    slice_string_front = my_string[:s]
    slice_string_back = my_string[s + len(overwrite_string):]
    
    return slice_string_front + overwrite_string + slice_string_back
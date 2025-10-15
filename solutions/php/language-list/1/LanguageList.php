<?php

function language_list(...$arg)
{
    return count($arg) == 0 ? [] : $arg;
}

function add_to_language_list(array $lang_arr, string $lang_to_add)
{
    array_push($lang_arr, $lang_to_add);
    return $lang_arr;
}


function prune_language_list(array $lang_arr)
{
    array_splice($lang_arr, 0, 1);
    return $lang_arr;
}

function current_language(array $lang_arr)
{
    return $lang_arr[0];
}

function language_list_length(array $lang_arr)
{
    return count($lang_arr);
}

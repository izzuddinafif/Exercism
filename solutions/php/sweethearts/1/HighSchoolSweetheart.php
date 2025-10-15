<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return mb_substr(trim($name), 0, 1);
    }

    public function initial(string $name): string
    {
        return strtoupper($this->firstLetter($name) . ".");
    }

    public function initials(string $name): string
    {

        $arr = explode(" ", $name);
        $str = "";
        foreach ($arr as $a) {
            $str .= $this->initial($a) . " ";
        }
        return rtrim($str);
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $heart = <<<EOF
             ******       ******
           **      **   **      **
         **         ** **         **
        **            *            **
        **                         **
        **     %s  +  %s     **
         **                       **
           **                   **
             **               **
               **           **
                 **       **
                   **   **
                     ***
                      *
        EOF;
        return sprintf($heart, $this->initials($sweetheart_a), $this->initials($sweetheart_b));
    }
}

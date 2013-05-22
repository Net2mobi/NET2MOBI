<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class FileUtilities
{
	public function createIndexFromTemplate($src, $dest, $tags)
	{
		if(!is_array($tags)) return false;
		
		$freader = @fopen($src, "r");
		if(!$freader) return FALSE;
		
		$fwriter = @fopen($dest, "w");
		if(!$fwriter) return FALSE;
		
		while (($row = fgets($freader, 4096)) !== FALSE)
		{
			$str = "";
			foreach($tags as $tag)
			{
				$key = "%".array_search($tag, $tags)."%";
				$value = $tag;
				
				$str = str_replace($key, $value, $row);
			}
			fputs($fwriter, $str);
		}
		fclose($freader);
		fclose($fwriter);
				
		return TRUE;
	}
	
	public function copyTextFile($src, $dest)
	{		
		$freader = @fopen($src, "r");
		if(!$freader) return FALSE;
		
		$fwriter = @fopen($dest, "w");
		if(!$fwriter) return FALSE;
		
		while (($row = fgets($freader, 4096)) !== FALSE)
		{
			fputs($fwriter, $row);
		}
		fclose($freader);
		fclose($fwriter);
		
		return TRUE;
	}
	
	public function clearDir($folder)
	{
		$hdir = @opendir($folder);
		if(!$hdir) return FALSE;
		while($file = readdir($hdir))
		{
			if($file == '.' || $file == '..') continue;
				if(is_dir($folder."/".$file))
				{
					$r = $this->clearDir($folder."/".$file);
					if(!$r) return FALSE;
				}
				else
				{
					$r = @unlink($folder."/".$file);
					if(!$r) return FALSE;
				}
		}
		closedir($hdir);
		$r = @rmdir($folder);
		if(!$r) return FALSE;
		return TRUE;
	}
	
	public function deleteFile($file)
	{
		if(!is_dir($file))
		{
			unlink($file);
			return TRUE;
		}
		
		return FALSE;
	}
	
	/**
     * http://www.php.net/manual/fr/function.copy.php
     * Copy file or folder from source to destination, it can do
     * recursive copy as well and is very smart
     * It recursively creates the dest file or directory path if there weren't exists
     * Situtaions :
     * - Src:/home/test/file.txt ,Dst:/home/test/b ,Result:/home/test/b -> If source was file copy file.txt name with b as name to destination
     * - Src:/home/test/file.txt ,Dst:/home/test/b/ ,Result:/home/test/b/file.txt -> If source was file Creates b directory if does not exsits and copy file.txt into it
     * - Src:/home/test ,Dst:/home/ ,Result:/home/test/** -> If source was directory copy test directory and all of its content into dest     
     * - Src:/home/test/ ,Dst:/home/ ,Result:/home/**-> if source was direcotry copy its content to dest
     * - Src:/home/test ,Dst:/home/test2 ,Result:/home/test2/** -> if source was directoy copy it and its content to dest with test2 as name
     * - Src:/home/test/ ,Dst:/home/test2 ,Result:->/home/test2/** if source was directoy copy it and its content to dest with test2 as name
     * @todo
     *     - Should have rollback technique so it can undo the copy when it wasn't successful
     *  - Auto destination technique should be possible to turn off
     *  - Supporting callback function
     *  - May prevent some issues on shared enviroments : http://us3.php.net/umask
     * @param $source //file or folder
     * @param $dest ///file or folder
     * @param $options //folderPermission,filePermission
     * @return boolean
     */
    public function smartCopy($source, $dest, $options=array('folderPermission'=>0755,'filePermission'=>0755))
    {
        $result=false;
       
        if (is_file($source)) {
            if ($dest[strlen($dest)-1]=='/') {
                if (!file_exists($dest)) {
                    cmfcDirectory::makeAll($dest,$options['folderPermission'],true);
                }
                $__dest=$dest."/".basename($source);
            } else {
                $__dest=$dest;
            }
            $result=copy($source, $__dest);
            chmod($__dest,$options['filePermission']);
           
        } elseif(is_dir($source)) {
            if ($dest[strlen($dest)-1]=='/') {
                if ($source[strlen($source)-1]=='/') {
                    //Copy only contents
                } else {
                    //Change parent itself and its contents
                    $dest=$dest.basename($source);
                    @mkdir($dest);
                    chmod($dest,$options['filePermission']);
                }
            } else {
                if ($source[strlen($source)-1]=='/') {
                    //Copy parent directory with new name and all its content
                    @mkdir($dest,$options['folderPermission']);
                    chmod($dest,$options['filePermission']);
                } else {
                    //Copy parent directory with new name and all its content
                    @mkdir($dest,$options['folderPermission']);
                    chmod($dest,$options['filePermission']);
                }
            }

            $dirHandle=opendir($source);
            while($file=readdir($dirHandle))
            {
                if($file!="." && $file!="..")
                {
                     if(!is_dir($source."/".$file)) {
                        $__dest=$dest."/".$file;
                    } else {
                        $__dest=$dest."/".$file;
                    }
                    //echo "$source/$file ||| $__dest<br />";
                    $result=$this->smartCopy($source."/".$file, $__dest, $options);
                }
            }
            closedir($dirHandle);
           
        } else {
            $result=false;
        }
        return $result;
    }
	
	function recursiveCopy($source, $dest, $diffDir = ''){
		$sourceHandle = opendir($source);
		if(!$diffDir)
				$diffDir = $source;
	   
		mkdir($dest . '/' . $diffDir);
	   
		while($res = readdir($sourceHandle)){
			if($res == '.' || $res == '..')
				continue;
		   
			if(is_dir($source . '/' . $res)){
				$this->recursiveCopy($source . '/' . $res, $dest, $diffDir . '/' . $res);
			} else {
				copy($source . '/' . $res, $dest . '/' . $diffDir . '/' . $res);
			   
			}
		}
	} 
}
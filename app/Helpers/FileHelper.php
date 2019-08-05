<?php
/**
 * Created by PhpStorm.
 * User: dev001
 * Date: 12/20/18
 * Time: 5:37 PM
 */

namespace App\Helpers;


use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Http\UploadedFile;
use Illuminate\Log\Logger;
use Illuminate\Filesystem\FilesystemManager;

class FileHelper
{

    /**
     * @var FilesystemManager
     */
    private $storage;

    /**
     * Logger
     *
     * @var
     */
    private $logger;

    /**
     * Filesystem
     *
     * @var
     */
    private $filesystem;

    public function __construct(
        FilesystemManager $storage,
        Logger $logger,
        Filesystem $filesystem
    ) {
        $this->storage = $storage;
        $this->logger  = $logger;
        $this->filesystem = $filesystem;
    }

    /**
     * Upload file to a $directory
     *
     * @param UploadedFile $content
     * @param string       $directory
     *
     * @return bool|string
     */
    public function upload(UploadedFile $content, $directory = '')
    {
        $originalFileExtension = $content->getClientOriginalExtension();
        $hash = md5($content->getFilename() . time());

        $fileName = "{$directory}/{$hash}.{$originalFileExtension}";

        try {
            if ($this->storage->put($fileName, $this->filesystem->get($content)) === false){
                return false;
            }

            return $fileName;
        } catch (FileNotFoundException $e) {
            $this->logger->error($e->getMessage(), [
                'file name' => $fileName
            ]);

            return false;
        }
    }

    /**
     * @param $fileName
     *
     * @return bool|\Illuminate\Contracts\Filesystem\Filesystem
     */
    public function get($fileName)
    {
        if ($this->exists($fileName)){
            return $this->storage->get($fileName);
        }else{
            return false;
        }
    }

    /**
     * @param $fileName
     *
     * @return bool
     */
    public function exists($fileName)
    {
        return $this->storage->exists($fileName);
    }

    /**
     * @param $fileName
     *
     * @return mixed
     */
    public function download($fileName)
    {
        return $this->storage->download($fileName);
    }

    /**
     * @param $fileName
     *
     * @return bool
     */
    public function delete($fileName)
    {
        return $this->storage->delete($fileName);
    }

    /**
     * @param $fileName
     *
     * @return bool
     */
    public function deleteDirectory($fileName)
    {
        return $this->storage->deleteDirectory($fileName);
    }
}

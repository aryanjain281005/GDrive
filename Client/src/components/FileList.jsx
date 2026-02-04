// FileList component
import React from 'react';
import FileItem from './FileItem';
import './FileList.css';
const FileList = ({ files, onFileSelect }) => {
    return (
        <div className="file-list">
            {files.map((file) => (
                <FileItem key={file._id} file={file} onFileSelect={onFileSelect} />
            ))}
        </div>
    );
};
export default FileList;

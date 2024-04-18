import hyunwoo from "../../img/image (2).png"
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Cube: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 씬, 카메라, 렌더러 초기화
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(new THREE.Color(0x000000)); // 검은색 배경 설정

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(hyunwoo);

        // 큐브 생성
        const geometry = new THREE.BoxGeometry(3, 3, 3);
        const material = new THREE.MeshBasicMaterial({ map: texture });
        const cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        camera.position.z = 5;

        // 큐브 이동 방향
        let dx = 0.05;
        let dy = 0.05;

        // 렌더 루프
        const animate = () => {
            requestAnimationFrame(animate);

            // 큐브 회전
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;

            cube.position.x += dx;
            cube.position.y += dy;

            const maxX = window.innerWidth / (window.innerWidth / camera.position.z);
            const maxY = window.innerHeight / (window.innerHeight / camera.position.z);
            if (cube.position.x > maxX || cube.position.x < -maxX) {
                dx = -dx;
            }
            if (cube.position.y > maxY || cube.position.y < -maxY) {
                dy = -dy;
            }

            renderer.render(scene, camera);
        };

        animate();

        const onDocumentMouseDown = (e:any) => {
            e.preventDefault();

            const mouse = new THREE.Vector2();
            mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;

            const raycaster = new THREE.Raycaster();
            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects([cube]);

            if (intersects.length > 0) {
                // 여기에 원하는 페이지로의 이동 로직을 추가합니다.
                window.location.href = '/post';
            }
        };

        document.addEventListener('mousedown', onDocumentMouseDown, false);

        // 컴포넌트 언마운트 시 렌더러에서 캔버스 제거
        return () => {
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
            document.removeEventListener('mousedown', onDocumentMouseDown, false);
        };
    }, []);

    return <div ref={mountRef} style={{cursor: "pointer"}} />;
};

export default Cube;
